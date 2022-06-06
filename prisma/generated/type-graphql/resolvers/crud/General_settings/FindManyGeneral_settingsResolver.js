"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyGeneral_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyGeneral_settingsArgs_1 = require("./args/FindManyGeneral_settingsArgs");
const General_settings_1 = require("../../../models/General_settings");
const helpers_1 = require("../../../helpers");
let FindManyGeneral_settingsResolver = class FindManyGeneral_settingsResolver {
    async findManyGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [General_settings_1.General_settings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyGeneral_settingsArgs_1.FindManyGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyGeneral_settingsResolver.prototype, "findManyGeneral_settings", null);
FindManyGeneral_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => General_settings_1.General_settings)
], FindManyGeneral_settingsResolver);
exports.FindManyGeneral_settingsResolver = FindManyGeneral_settingsResolver;
