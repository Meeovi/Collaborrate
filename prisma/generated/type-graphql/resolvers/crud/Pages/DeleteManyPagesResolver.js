"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyPagesArgs_1 = require("./args/DeleteManyPagesArgs");
const Pages_1 = require("../../../models/Pages");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyPagesResolver = class DeleteManyPagesResolver {
    async deleteManyPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPagesArgs_1.DeleteManyPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyPagesResolver.prototype, "deleteManyPages", null);
DeleteManyPagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], DeleteManyPagesResolver);
exports.DeleteManyPagesResolver = DeleteManyPagesResolver;
