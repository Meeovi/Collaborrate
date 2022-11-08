"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneEventsArgs_1 = require("./args/CreateOneEventsArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let CreateOneEventsResolver = class CreateOneEventsResolver {
    async createOneEvents(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneEventsArgs_1.CreateOneEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneEventsResolver.prototype, "createOneEvents", null);
CreateOneEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], CreateOneEventsResolver);
exports.CreateOneEventsResolver = CreateOneEventsResolver;
