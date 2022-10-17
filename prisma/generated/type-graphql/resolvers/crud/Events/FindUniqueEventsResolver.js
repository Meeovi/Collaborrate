"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueEventsArgs_1 = require("./args/FindUniqueEventsArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let FindUniqueEventsResolver = class FindUniqueEventsResolver {
    async findUniqueEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Events_1.Events, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEventsArgs_1.FindUniqueEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueEventsResolver.prototype, "findUniqueEvents", null);
FindUniqueEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], FindUniqueEventsResolver);
exports.FindUniqueEventsResolver = FindUniqueEventsResolver;
