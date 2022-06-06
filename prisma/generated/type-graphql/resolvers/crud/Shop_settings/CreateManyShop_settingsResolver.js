"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyShop_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyShop_settingsArgs_1 = require("./args/CreateManyShop_settingsArgs");
const Shop_settings_1 = require("../../../models/Shop_settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyShop_settingsResolver = class CreateManyShop_settingsResolver {
    async createManyShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyShop_settingsArgs_1.CreateManyShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyShop_settingsResolver.prototype, "createManyShop_settings", null);
CreateManyShop_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], CreateManyShop_settingsResolver);
exports.CreateManyShop_settingsResolver = CreateManyShop_settingsResolver;
