"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByContractsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByContractsArgs_1 = require("./args/GroupByContractsArgs");
const Contracts_1 = require("../../../models/Contracts");
const ContractsGroupBy_1 = require("../../outputs/ContractsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByContractsResolver = class GroupByContractsResolver {
    async groupByContracts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ContractsGroupBy_1.ContractsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByContractsArgs_1.GroupByContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByContractsResolver.prototype, "groupByContracts", null);
GroupByContractsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Contracts_1.Contracts)
], GroupByContractsResolver);
exports.GroupByContractsResolver = GroupByContractsResolver;
