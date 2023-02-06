"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSettingsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSettingsOrThrowArgs_1 = require("./args/FindUniqueSettingsOrThrowArgs");
const Settings_1 = require("../../../models/Settings");
const helpers_1 = require("../../../helpers");
let FindUniqueSettingsOrThrowResolver = class FindUniqueSettingsOrThrowResolver {
    async findUniqueSettingsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingsOrThrowArgs_1.FindUniqueSettingsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSettingsOrThrowResolver.prototype, "findUniqueSettingsOrThrow", null);
FindUniqueSettingsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], FindUniqueSettingsOrThrowResolver);
exports.FindUniqueSettingsOrThrowResolver = FindUniqueSettingsOrThrowResolver;
