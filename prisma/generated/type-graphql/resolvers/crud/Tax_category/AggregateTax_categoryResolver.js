"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTax_categoryArgs_1 = require("./args/AggregateTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const AggregateTax_category_1 = require("../../outputs/AggregateTax_category");
const helpers_1 = require("../../../helpers");
let AggregateTax_categoryResolver = class AggregateTax_categoryResolver {
    async aggregateTax_category(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTax_category_1.AggregateTax_category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTax_categoryArgs_1.AggregateTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTax_categoryResolver.prototype, "aggregateTax_category", null);
AggregateTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], AggregateTax_categoryResolver);
exports.AggregateTax_categoryResolver = AggregateTax_categoryResolver;
