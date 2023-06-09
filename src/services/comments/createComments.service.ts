import { prisma } from "../../prisma";
import { ICommentRequest } from "../../interfaces/comments/comments.interface";
import { format } from "date-fns";
import { omit } from "lodash";

export const createCommentsService = async (data: ICommentRequest, id: string, user_id: string) => {
    const { description } = data;
    const newComment = await prisma.comments.create({
        data: {
            car:  { connect: { id: id } },
            description,
            user:  { connect: { id: user_id } }
        },
         include: {
             user: true,
         },
    });

    const date = new Date();

    const formattedComment = {
        ...newComment,
        created_at: format(date, 'dd/MM/yyyy HH:mm:ss'),
        user: omit(newComment.user, ["password", "cpf", "email", "phone_number", "description", "birth_date", "is_adm", "is_seller", "reset_token"])
    };

    return formattedComment;
};