"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManySettingsArgs_1 = require("./args/UpdateManySettingsArgs");
const Settings_1 = require("../../../models/Settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySettingsResolver = class UpdateManySettingsResolver {
    async updateManySettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySettingsArgs_1.UpdateManySettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySettingsResolver.prototype, "updateManySettings", null);
UpdateManySettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], UpdateManySettingsResolver);
exports.UpdateManySettingsResolver = UpdateManySettingsResolver;
