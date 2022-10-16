"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCurrency_symbolsArgs_1 = require("./args/AggregateCurrency_symbolsArgs");
const CreateManyCurrency_symbolsArgs_1 = require("./args/CreateManyCurrency_symbolsArgs");
const CreateOneCurrency_symbolsArgs_1 = require("./args/CreateOneCurrency_symbolsArgs");
const DeleteManyCurrency_symbolsArgs_1 = require("./args/DeleteManyCurrency_symbolsArgs");
const DeleteOneCurrency_symbolsArgs_1 = require("./args/DeleteOneCurrency_symbolsArgs");
const FindFirstCurrency_symbolsArgs_1 = require("./args/FindFirstCurrency_symbolsArgs");
const FindManyCurrency_symbolsArgs_1 = require("./args/FindManyCurrency_symbolsArgs");
const FindUniqueCurrency_symbolsArgs_1 = require("./args/FindUniqueCurrency_symbolsArgs");
const GroupByCurrency_symbolsArgs_1 = require("./args/GroupByCurrency_symbolsArgs");
const UpdateManyCurrency_symbolsArgs_1 = require("./args/UpdateManyCurrency_symbolsArgs");
const UpdateOneCurrency_symbolsArgs_1 = require("./args/UpdateOneCurrency_symbolsArgs");
const UpsertOneCurrency_symbolsArgs_1 = require("./args/UpsertOneCurrency_symbolsArgs");
const helpers_1 = require("../../../helpers");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCurrency_symbols_1 = require("../../outputs/AggregateCurrency_symbols");
const Currency_symbolsGroupBy_1 = require("../../outputs/Currency_symbolsGroupBy");
let Currency_symbolsCrudResolver = class Currency_symbolsCrudResolver {
    async aggregateCurrency_symbols(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.create({
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
    async deleteOneCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.delete({
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
    async findUniqueCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCurrency_symbols(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCurrency_symbolsArgs_1.CreateOneCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "createOneCurrency_symbols", null);
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
    TypeGraphQL.Mutation(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCurrency_symbolsArgs_1.DeleteOneCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "deleteOneCurrency_symbols", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCurrency_symbolsArgs_1.UpdateOneCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "updateOneCurrency_symbols", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCurrency_symbolsArgs_1.UpsertOneCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_symbolsCrudResolver.prototype, "upsertOneCurrency_symbols", null);
Currency_symbolsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], Currency_symbolsCrudResolver);
exports.Currency_symbolsCrudResolver = Currency_symbolsCrudResolver;
