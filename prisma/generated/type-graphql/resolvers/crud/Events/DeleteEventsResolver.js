"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteEventsArgs_1 = require("./args/DeleteEventsArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let DeleteEventsResolver = class DeleteEventsResolver {
    async deleteEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Events_1.Events, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteEventsArgs_1.DeleteEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteEventsResolver.prototype, "deleteEvents", null);
DeleteEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], DeleteEventsResolver);
exports.DeleteEventsResolver = DeleteEventsResolver;
