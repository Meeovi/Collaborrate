"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOnePagesArgs_1 = require("./args/UpdateOnePagesArgs");
const Pages_1 = require("../../../models/Pages");
const helpers_1 = require("../../../helpers");
let UpdateOnePagesResolver = class UpdateOnePagesResolver {
    async updateOnePages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pages_1.Pages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePagesArgs_1.UpdateOnePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOnePagesResolver.prototype, "updateOnePages", null);
UpdateOnePagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], UpdateOnePagesResolver);
exports.UpdateOnePagesResolver = UpdateOnePagesResolver;
