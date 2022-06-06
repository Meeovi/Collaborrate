"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManySales_settingsArgs_1 = require("./args/CreateManySales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySales_settingsResolver = class CreateManySales_settingsResolver {
    async createManySales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySales_settingsArgs_1.CreateManySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManySales_settingsResolver.prototype, "createManySales_settings", null);
CreateManySales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], CreateManySales_settingsResolver);
exports.CreateManySales_settingsResolver = CreateManySales_settingsResolver;
