"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTemplatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTemplatesArgs_1 = require("./args/DeleteOneTemplatesArgs");
const Templates_1 = require("../../../models/Templates");
const helpers_1 = require("../../../helpers");
let DeleteOneTemplatesResolver = class DeleteOneTemplatesResolver {
    async deleteOneTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Templates_1.Templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTemplatesArgs_1.DeleteOneTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTemplatesResolver.prototype, "deleteOneTemplates", null);
DeleteOneTemplatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], DeleteOneTemplatesResolver);
exports.DeleteOneTemplatesResolver = DeleteOneTemplatesResolver;
