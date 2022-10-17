"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMessagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMessagesArgs_1 = require("./args/AggregateMessagesArgs");
const Messages_1 = require("../../../models/Messages");
const AggregateMessages_1 = require("../../outputs/AggregateMessages");
const helpers_1 = require("../../../helpers");
let AggregateMessagesResolver = class AggregateMessagesResolver {
    async aggregateMessages(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMessages_1.AggregateMessages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMessagesArgs_1.AggregateMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMessagesResolver.prototype, "aggregateMessages", null);
AggregateMessagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Messages_1.Messages)
], AggregateMessagesResolver);
exports.AggregateMessagesResolver = AggregateMessagesResolver;
