"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCustomizationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneCustomizationsArgs_1 = require("./args/UpdateOneCustomizationsArgs");
const Customizations_1 = require("../../../models/Customizations");
const helpers_1 = require("../../../helpers");
let UpdateOneCustomizationsResolver = class UpdateOneCustomizationsResolver {
    async updateOneCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customizations_1.Customizations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCustomizationsArgs_1.UpdateOneCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCustomizationsResolver.prototype, "updateOneCustomizations", null);
UpdateOneCustomizationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customizations_1.Customizations)
], UpdateOneCustomizationsResolver);
exports.UpdateOneCustomizationsResolver = UpdateOneCustomizationsResolver;
