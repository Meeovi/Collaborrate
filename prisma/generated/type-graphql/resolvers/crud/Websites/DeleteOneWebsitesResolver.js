"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneWebsitesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneWebsitesArgs_1 = require("./args/DeleteOneWebsitesArgs");
const Websites_1 = require("../../../models/Websites");
const helpers_1 = require("../../../helpers");
let DeleteOneWebsitesResolver = class DeleteOneWebsitesResolver {
    async deleteOneWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Websites_1.Websites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWebsitesArgs_1.DeleteOneWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneWebsitesResolver.prototype, "deleteOneWebsites", null);
DeleteOneWebsitesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Websites_1.Websites)
], DeleteOneWebsitesResolver);
exports.DeleteOneWebsitesResolver = DeleteOneWebsitesResolver;
