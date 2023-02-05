"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSettingsArgs_1 = require("./args/FindUniqueSettingsArgs");
const Settings_1 = require("../../../models/Settings");
const helpers_1 = require("../../../helpers");
let FindUniqueSettingsResolver = class FindUniqueSettingsResolver {
    async findUniqueSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingsArgs_1.FindUniqueSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSettingsResolver.prototype, "findUniqueSettings", null);
FindUniqueSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], FindUniqueSettingsResolver);
exports.FindUniqueSettingsResolver = FindUniqueSettingsResolver;
