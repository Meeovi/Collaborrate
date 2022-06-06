"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateEventsArgs_1 = require("./args/CreateEventsArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let CreateEventsResolver = class CreateEventsResolver {
    async createEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Events_1.Events, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateEventsArgs_1.CreateEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateEventsResolver.prototype, "createEvents", null);
CreateEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], CreateEventsResolver);
exports.CreateEventsResolver = CreateEventsResolver;
