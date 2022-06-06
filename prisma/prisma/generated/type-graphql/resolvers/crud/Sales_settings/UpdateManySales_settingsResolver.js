"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManySales_settingsArgs_1 = require("./args/UpdateManySales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySales_settingsResolver = class UpdateManySales_settingsResolver {
    async updateManySales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySales_settingsArgs_1.UpdateManySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySales_settingsResolver.prototype, "updateManySales_settings", null);
UpdateManySales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], UpdateManySales_settingsResolver);
exports.UpdateManySales_settingsResolver = UpdateManySales_settingsResolver;
