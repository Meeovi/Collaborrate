"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyApitokenArgs_1 = require("./args/UpdateManyApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyApitokenResolver = class UpdateManyApitokenResolver {
    async updateManyApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyApitokenArgs_1.UpdateManyApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyApitokenResolver.prototype, "updateManyApitoken", null);
UpdateManyApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], UpdateManyApitokenResolver);
exports.UpdateManyApitokenResolver = UpdateManyApitokenResolver;
