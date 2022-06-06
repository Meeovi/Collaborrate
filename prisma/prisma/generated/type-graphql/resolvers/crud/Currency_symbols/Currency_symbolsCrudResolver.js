"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCurrency_symbolsArgs_1 = require("./args/AggregateCurrency_symbolsArgs");
const CreateCurrency_symbolsArgs_1 = require("./args/CreateCurrency_symbolsArgs");
const CreateManyCurrency_symbolsArgs_1 = require("./args/CreateManyCurrency_symbolsArgs");
const DeleteCurrency_symbolsArgs_1 = require("./args/DeleteCurrency_symbolsArgs");
const DeleteManyCurrency_symbolsArgs_1 = require("./args/DeleteManyCurrency_symbolsArgs");
const FindFirstCurrency_symbolsArgs_1 = require("./args/FindFirstCurrency_symbolsArgs");
const FindManyCurrency_symbolsArgs_1 = require("./args/FindManyCurrency_symbolsArgs");
const FindUniqueCurrency_symbolsArgs_1 = require("./args/FindUniqueCurrency_symbolsArgs");
const GroupByCurrency_symbolsArgs_1 = require("./args/GroupByCurrency_symbolsArgs");
const UpdateCurrency_symbolsArgs_1 = require("./args/UpdateCurrency_symbolsArgs");
const UpdateManyCurrency_symbolsArgs_1 = require("./args/UpdateManyCurrency_symbolsArgs");
const UpsertCurrency_symbolsArgs_1 = require("./args/UpsertCurrency_symbolsArgs");
const helpers_1 = require("../../../helpers");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCurrency_symbols_1 = require("../../outputs/AggregateCurrency_symbols");
const Currency_symbolsGroupBy_1 = require("../../outputs/Currency_symbolsGroupBy");
let Currency_symbolsCrudResolver = class Currency_symbolsCrudResolver {
    async findUniqueCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCurrency_symbols(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCurrency_symbols(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCurrency_symbolsArgs_1.FindUniqueCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "findUniqueCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCurrency_symbolsArgs_1.FindFirstCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "findFirstCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currency_symbols_1.Currency_symbols], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCurrency_symbolsArgs_1.FindManyCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "findManyCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCurrency_symbolsArgs_1.CreateCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "createCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCurrency_symbolsArgs_1.CreateManyCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "createManyCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCurrency_symbolsArgs_1.DeleteCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "deleteCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCurrency_symbolsArgs_1.UpdateCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "updateCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCurrency_symbolsArgs_1.DeleteManyCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "deleteManyCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCurrency_symbolsArgs_1.UpdateManyCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "updateManyCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCurrency_symbolsArgs_1.UpsertCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "upsertCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCurrency_symbols_1.AggregateCurrency_symbols, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCurrency_symbolsArgs_1.AggregateCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "aggregateCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currency_symbolsGroupBy_1.Currency_symbolsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCurrency_symbolsArgs_1.GroupByCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "groupByCurrency_symbols", null);
Currency_symbolsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], Currency_symbolsCrudResolver);
exports.Currency_symbolsCrudResolver = Currency_symbolsCrudResolver;
