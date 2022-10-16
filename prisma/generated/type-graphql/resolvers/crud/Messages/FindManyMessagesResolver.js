"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMessagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyMessagesArgs_1 = require("./args/FindManyMessagesArgs");
const Messages_1 = require("../../../models/Messages");
const helpers_1 = require("../../../helpers");
let FindManyMessagesResolver = class FindManyMessagesResolver {
    async findManyMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Messages_1.Messages], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMessagesArgs_1.FindManyMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyMessagesResolver.prototype, "findManyMessages", null);
FindManyMessagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Messages_1.Messages)
], FindManyMessagesResolver);
exports.FindManyMessagesResolver = FindManyMessagesResolver;
