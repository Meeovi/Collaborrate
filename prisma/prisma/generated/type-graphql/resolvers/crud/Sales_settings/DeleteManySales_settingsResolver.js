"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManySales_settingsArgs_1 = require("./args/DeleteManySales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManySales_settingsResolver = class DeleteManySales_settingsResolver {
    async deleteManySales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySales_settingsArgs_1.DeleteManySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManySales_settingsResolver.prototype, "deleteManySales_settings", null);
DeleteManySales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], DeleteManySales_settingsResolver);
exports.DeleteManySales_settingsResolver = DeleteManySales_settingsResolver;
