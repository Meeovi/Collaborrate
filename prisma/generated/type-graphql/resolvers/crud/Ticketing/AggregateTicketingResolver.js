"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTicketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTicketingArgs_1 = require("./args/AggregateTicketingArgs");
const Ticketing_1 = require("../../../models/Ticketing");
const AggregateTicketing_1 = require("../../outputs/AggregateTicketing");
const helpers_1 = require("../../../helpers");
let AggregateTicketingResolver = class AggregateTicketingResolver {
    async aggregateTicketing(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTicketing_1.AggregateTicketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTicketingArgs_1.AggregateTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTicketingResolver.prototype, "aggregateTicketing", null);
AggregateTicketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ticketing_1.Ticketing)
], AggregateTicketingResolver);
exports.AggregateTicketingResolver = AggregateTicketingResolver;
