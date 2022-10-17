"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneEventsArgs_1 = require("./args/DeleteOneEventsArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let DeleteOneEventsResolver = class DeleteOneEventsResolver {
    async deleteOneEvents(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEventsArgs_1.DeleteOneEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneEventsResolver.prototype, "deleteOneEvents", null);
DeleteOneEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], DeleteOneEventsResolver);
exports.DeleteOneEventsResolver = DeleteOneEventsResolver;
