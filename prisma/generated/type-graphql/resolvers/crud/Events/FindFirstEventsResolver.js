"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstEventsArgs_1 = require("./args/FindFirstEventsArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let FindFirstEventsResolver = class FindFirstEventsResolver {
    async findFirstEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEventsArgs_1.FindFirstEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstEventsResolver.prototype, "findFirstEvents", null);
FindFirstEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], FindFirstEventsResolver);
exports.FindFirstEventsResolver = FindFirstEventsResolver;
