"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySpecial_discountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManySpecial_discountsArgs_1 = require("./args/CreateManySpecial_discountsArgs");
const Special_discounts_1 = require("../../../models/Special_discounts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySpecial_discountsResolver = class CreateManySpecial_discountsResolver {
    async createManySpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySpecial_discountsArgs_1.CreateManySpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManySpecial_discountsResolver.prototype, "createManySpecial_discounts", null);
CreateManySpecial_discountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Special_discounts_1.Special_discounts)
], CreateManySpecial_discountsResolver);
exports.CreateManySpecial_discountsResolver = CreateManySpecial_discountsResolver;
