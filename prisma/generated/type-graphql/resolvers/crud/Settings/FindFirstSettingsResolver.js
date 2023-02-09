"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSettingsArgs_1 = require("./args/FindFirstSettingsArgs");
const Settings_1 = require("../../../models/Settings");
const helpers_1 = require("../../../helpers");
let FindFirstSettingsResolver = class FindFirstSettingsResolver {
    async findFirstSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settings_1.Settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingsArgs_1.FindFirstSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSettingsResolver.prototype, "findFirstSettings", null);
FindFirstSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], FindFirstSettingsResolver);
exports.FindFirstSettingsResolver = FindFirstSettingsResolver;
