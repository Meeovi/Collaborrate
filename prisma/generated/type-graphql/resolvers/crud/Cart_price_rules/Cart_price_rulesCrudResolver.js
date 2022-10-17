"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCart_price_rulesArgs_1 = require("./args/AggregateCart_price_rulesArgs");
const CreateManyCart_price_rulesArgs_1 = require("./args/CreateManyCart_price_rulesArgs");
const CreateOneCart_price_rulesArgs_1 = require("./args/CreateOneCart_price_rulesArgs");
const DeleteManyCart_price_rulesArgs_1 = require("./args/DeleteManyCart_price_rulesArgs");
const DeleteOneCart_price_rulesArgs_1 = require("./args/DeleteOneCart_price_rulesArgs");
const FindFirstCart_price_rulesArgs_1 = require("./args/FindFirstCart_price_rulesArgs");
const FindManyCart_price_rulesArgs_1 = require("./args/FindManyCart_price_rulesArgs");
const FindUniqueCart_price_rulesArgs_1 = require("./args/FindUniqueCart_price_rulesArgs");
const GroupByCart_price_rulesArgs_1 = require("./args/GroupByCart_price_rulesArgs");
const UpdateManyCart_price_rulesArgs_1 = require("./args/UpdateManyCart_price_rulesArgs");
const UpdateOneCart_price_rulesArgs_1 = require("./args/UpdateOneCart_price_rulesArgs");
const UpsertOneCart_price_rulesArgs_1 = require("./args/UpsertOneCart_price_rulesArgs");
const helpers_1 = require("../../../helpers");
const Cart_price_rules_1 = require("../../../models/Cart_price_rules");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCart_price_rules_1 = require("../../outputs/AggregateCart_price_rules");
const Cart_price_rulesGroupBy_1 = require("../../outputs/Cart_price_rulesGroupBy");
let Cart_price_rulesCrudResolver = class Cart_price_rulesCrudResolver {
    async aggregateCart_price_rules(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCart_price_rules(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCart_price_rules_1.AggregateCart_price_rules, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCart_price_rulesArgs_1.AggregateCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "aggregateCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCart_price_rulesArgs_1.CreateManyCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "createManyCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cart_price_rules_1.Cart_price_rules, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCart_price_rulesArgs_1.CreateOneCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "createOneCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCart_price_rulesArgs_1.DeleteManyCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "deleteManyCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cart_price_rules_1.Cart_price_rules, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCart_price_rulesArgs_1.DeleteOneCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "deleteOneCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cart_price_rules_1.Cart_price_rules, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCart_price_rulesArgs_1.FindFirstCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "findFirstCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cart_price_rules_1.Cart_price_rules], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCart_price_rulesArgs_1.FindManyCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "findManyCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cart_price_rules_1.Cart_price_rules, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCart_price_rulesArgs_1.FindUniqueCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "findUniqueCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cart_price_rulesGroupBy_1.Cart_price_rulesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCart_price_rulesArgs_1.GroupByCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "groupByCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCart_price_rulesArgs_1.UpdateManyCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "updateManyCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cart_price_rules_1.Cart_price_rules, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCart_price_rulesArgs_1.UpdateOneCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "updateOneCart_price_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cart_price_rules_1.Cart_price_rules, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCart_price_rulesArgs_1.UpsertOneCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Cart_price_rulesCrudResolver.prototype, "upsertOneCart_price_rules", null);
Cart_price_rulesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cart_price_rules_1.Cart_price_rules)
], Cart_price_rulesCrudResolver);
exports.Cart_price_rulesCrudResolver = Cart_price_rulesCrudResolver;
