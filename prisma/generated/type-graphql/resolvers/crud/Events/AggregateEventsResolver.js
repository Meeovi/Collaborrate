"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEventsArgs_1 = require("./args/AggregateEventsArgs");
const Events_1 = require("../../../models/Events");
const AggregateEvents_1 = require("../../outputs/AggregateEvents");
const helpers_1 = require("../../../helpers");
let AggregateEventsResolver = class AggregateEventsResolver {
    async aggregateEvents(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).events.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEvents_1.AggregateEvents, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEventsArgs_1.AggregateEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateEventsResolver.prototype, "aggregateEvents", null);
AggregateEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], AggregateEventsResolver);
exports.AggregateEventsResolver = AggregateEventsResolver;
