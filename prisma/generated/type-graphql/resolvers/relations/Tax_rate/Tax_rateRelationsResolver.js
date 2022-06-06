"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Products_1 = require("../../../models/Products");
const Tax_rate_1 = require("../../../models/Tax_rate");
const helpers_1 = require("../../../helpers");
let Tax_rateRelationsResolver = class Tax_rateRelationsResolver {
    async products(tax_rate, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.findUnique({
            where: {
                id: tax_rate.id,
            },
        }).products({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tax_rate_1.Tax_rate, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateRelationsResolver.prototype, "products", null);
Tax_rateRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rate_1.Tax_rate)
], Tax_rateRelationsResolver);
exports.Tax_rateRelationsResolver = Tax_rateRelationsResolver;
