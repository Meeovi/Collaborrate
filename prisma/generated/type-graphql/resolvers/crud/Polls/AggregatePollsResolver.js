"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePollsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePollsArgs_1 = require("./args/AggregatePollsArgs");
const Polls_1 = require("../../../models/Polls");
const AggregatePolls_1 = require("../../outputs/AggregatePolls");
const helpers_1 = require("../../../helpers");
let AggregatePollsResolver = class AggregatePollsResolver {
    async aggregatePolls(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePolls_1.AggregatePolls, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePollsArgs_1.AggregatePollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePollsResolver.prototype, "aggregatePolls", null);
AggregatePollsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Polls_1.Polls)
], AggregatePollsResolver);
exports.AggregatePollsResolver = AggregatePollsResolver;
