"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneLogInResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneLogInArgs_1 = require("./args/CreateOneLogInArgs");
const LogIn_1 = require("../../../models/LogIn");
const helpers_1 = require("../../../helpers");
let CreateOneLogInResolver = class CreateOneLogInResolver {
    async createOneLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LogIn_1.LogIn, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneLogInArgs_1.CreateOneLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneLogInResolver.prototype, "createOneLogIn", null);
CreateOneLogInResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LogIn_1.LogIn)
], CreateOneLogInResolver);
exports.CreateOneLogInResolver = CreateOneLogInResolver;
