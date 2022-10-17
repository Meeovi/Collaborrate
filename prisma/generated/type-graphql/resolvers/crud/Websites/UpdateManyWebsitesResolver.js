"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWebsitesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyWebsitesArgs_1 = require("./args/UpdateManyWebsitesArgs");
const Websites_1 = require("../../../models/Websites");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyWebsitesResolver = class UpdateManyWebsitesResolver {
    async updateManyWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWebsitesArgs_1.UpdateManyWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyWebsitesResolver.prototype, "updateManyWebsites", null);
UpdateManyWebsitesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Websites_1.Websites)
], UpdateManyWebsitesResolver);
exports.UpdateManyWebsitesResolver = UpdateManyWebsitesResolver;
