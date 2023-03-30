"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCategoriesArgs_1 = require("./args/AggregateCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const AggregateCategories_1 = require("../../outputs/AggregateCategories");
const helpers_1 = require("../../../helpers");
let AggregateCategoriesResolver = class AggregateCategoriesResolver {
    async aggregateCategories(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCategories_1.AggregateCategories, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCategoriesArgs_1.AggregateCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCategoriesResolver.prototype, "aggregateCategories", null);
AggregateCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], AggregateCategoriesResolver);
exports.AggregateCategoriesResolver = AggregateCategoriesResolver;
