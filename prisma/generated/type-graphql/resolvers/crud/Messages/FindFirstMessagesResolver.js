"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMessagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstMessagesArgs_1 = require("./args/FindFirstMessagesArgs");
const Messages_1 = require("../../../models/Messages");
const helpers_1 = require("../../../helpers");
let FindFirstMessagesResolver = class FindFirstMessagesResolver {
    async findFirstMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Messages_1.Messages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMessagesArgs_1.FindFirstMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstMessagesResolver.prototype, "findFirstMessages", null);
FindFirstMessagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Messages_1.Messages)
], FindFirstMessagesResolver);
exports.FindFirstMessagesResolver = FindFirstMessagesResolver;
