"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeneral_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateGeneral_settingsArgs_1 = require("./args/UpdateGeneral_settingsArgs");
const General_settings_1 = require("../../../models/General_settings");
const helpers_1 = require("../../../helpers");
let UpdateGeneral_settingsResolver = class UpdateGeneral_settingsResolver {
    async updateGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => General_settings_1.General_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateGeneral_settingsArgs_1.UpdateGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateGeneral_settingsResolver.prototype, "updateGeneral_settings", null);
UpdateGeneral_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => General_settings_1.General_settings)
], UpdateGeneral_settingsResolver);
exports.UpdateGeneral_settingsResolver = UpdateGeneral_settingsResolver;
