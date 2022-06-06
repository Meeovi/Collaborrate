"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShop_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueShop_settingsArgs_1 = require("./args/FindUniqueShop_settingsArgs");
const Shop_settings_1 = require("../../../models/Shop_settings");
const helpers_1 = require("../../../helpers");
let FindUniqueShop_settingsResolver = class FindUniqueShop_settingsResolver {
    async findUniqueShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shop_settings_1.Shop_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShop_settingsArgs_1.FindUniqueShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueShop_settingsResolver.prototype, "findUniqueShop_settings", null);
FindUniqueShop_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], FindUniqueShop_settingsResolver);
exports.FindUniqueShop_settingsResolver = FindUniqueShop_settingsResolver;
