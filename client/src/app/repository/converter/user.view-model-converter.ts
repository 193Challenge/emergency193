import { User } from '../../model/user';

export class UserViewModelConverter {

    public static fromDTO(dto: any): User {
        const user = new User(dto.id, dto.name, dto.isVerified);
        return user;
    }
}
