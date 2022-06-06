"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGeneral_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGeneral_settingsArgs_1 = require("./args/AggregateGeneral_settingsArgs");
const General_settings_1 = require("../../../models/General_settings");
const AggregateGeneral_settings_1 = require("../../outputs/AggregateGeneral_settings");
const helpers_1 = require("../../../helpers");
let AggregateGeneral_settingsResolver = class AggregateGeneral_settingsResolver {
    async aggregateGeneral_settings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateGeneral_settings_1.AggregateGeneral_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateGeneral_settingsArgs_1.AggregateGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateGeneral_settingsResolver.prototype, "aggregateGeneral_settings", null);
AggregateGeneral_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => General_settings_1.General_settings)
], AggregateGeneral_settingsResolver);
exports.AggregateGeneral_settingsResolver = AggregateGeneral_settingsResolver;
