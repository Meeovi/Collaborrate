"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneSettingsArgs_1 = require("./args/UpsertOneSettingsArgs");
const Settings_1 = require("../../../models/Settings");
const helpers_1 = require("../../../helpers");
let UpsertOneSettingsResolver = class UpsertOneSettingsResolver {
    async upsertOneSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settings_1.Settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingsArgs_1.UpsertOneSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneSettingsResolver.prototype, "upsertOneSettings", null);
UpsertOneSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], UpsertOneSettingsResolver);
exports.UpsertOneSettingsResolver = UpsertOneSettingsResolver;
