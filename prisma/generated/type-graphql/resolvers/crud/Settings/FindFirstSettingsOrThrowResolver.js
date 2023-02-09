"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSettingsOrThrowArgs_1 = require("./args/FindFirstSettingsOrThrowArgs");
const Settings_1 = require("../../../models/Settings");
const helpers_1 = require("../../../helpers");
let FindFirstSettingsOrThrowResolver = class FindFirstSettingsOrThrowResolver {
    async findFirstSettingsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingsOrThrowArgs_1.FindFirstSettingsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSettingsOrThrowResolver.prototype, "findFirstSettingsOrThrow", null);
FindFirstSettingsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], FindFirstSettingsOrThrowResolver);
exports.FindFirstSettingsOrThrowResolver = FindFirstSettingsOrThrowResolver;
