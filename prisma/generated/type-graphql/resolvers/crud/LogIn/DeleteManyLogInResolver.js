"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLogInResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyLogInArgs_1 = require("./args/DeleteManyLogInArgs");
const LogIn_1 = require("../../../models/LogIn");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyLogInResolver = class DeleteManyLogInResolver {
    async deleteManyLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLogInArgs_1.DeleteManyLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyLogInResolver.prototype, "deleteManyLogIn", null);
DeleteManyLogInResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LogIn_1.LogIn)
], DeleteManyLogInResolver);
exports.DeleteManyLogInResolver = DeleteManyLogInResolver;
