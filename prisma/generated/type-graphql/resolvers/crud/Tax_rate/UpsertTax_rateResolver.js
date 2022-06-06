"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTax_rateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertTax_rateArgs_1 = require("./args/UpsertTax_rateArgs");
const Tax_rate_1 = require("../../../models/Tax_rate");
const helpers_1 = require("../../../helpers");
let UpsertTax_rateResolver = class UpsertTax_rateResolver {
    async upsertTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rate_1.Tax_rate, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTax_rateArgs_1.UpsertTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertTax_rateResolver.prototype, "upsertTax_rate", null);
UpsertTax_rateResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rate_1.Tax_rate)
], UpsertTax_rateResolver);
exports.UpsertTax_rateResolver = UpsertTax_rateResolver;
