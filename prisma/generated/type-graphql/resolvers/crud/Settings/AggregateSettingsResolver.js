"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSettingsArgs_1 = require("./args/AggregateSettingsArgs");
const Settings_1 = require("../../../models/Settings");
const AggregateSettings_1 = require("../../outputs/AggregateSettings");
const helpers_1 = require("../../../helpers");
let AggregateSettingsResolver = class AggregateSettingsResolver {
    async aggregateSettings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettings_1.AggregateSettings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingsArgs_1.AggregateSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSettingsResolver.prototype, "aggregateSettings", null);
AggregateSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], AggregateSettingsResolver);
exports.AggregateSettingsResolver = AggregateSettingsResolver;
