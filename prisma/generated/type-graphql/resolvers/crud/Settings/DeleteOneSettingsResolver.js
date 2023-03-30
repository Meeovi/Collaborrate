"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneSettingsArgs_1 = require("./args/DeleteOneSettingsArgs");
const Settings_1 = require("../../../models/Settings");
const helpers_1 = require("../../../helpers");
let DeleteOneSettingsResolver = class DeleteOneSettingsResolver {
    async deleteOneSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settings_1.Settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingsArgs_1.DeleteOneSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSettingsResolver.prototype, "deleteOneSettings", null);
DeleteOneSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], DeleteOneSettingsResolver);
exports.DeleteOneSettingsResolver = DeleteOneSettingsResolver;
