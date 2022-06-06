"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContractsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateContractsArgs_1 = require("./args/AggregateContractsArgs");
const Contracts_1 = require("../../../models/Contracts");
const AggregateContracts_1 = require("../../outputs/AggregateContracts");
const helpers_1 = require("../../../helpers");
let AggregateContractsResolver = class AggregateContractsResolver {
    async aggregateContracts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateContracts_1.AggregateContracts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateContractsArgs_1.AggregateContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateContractsResolver.prototype, "aggregateContracts", null);
AggregateContractsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Contracts_1.Contracts)
], AggregateContractsResolver);
exports.AggregateContractsResolver = AggregateContractsResolver;
