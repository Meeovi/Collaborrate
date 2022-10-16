"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMessagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneMessagesArgs_1 = require("./args/CreateOneMessagesArgs");
const Messages_1 = require("../../../models/Messages");
const helpers_1 = require("../../../helpers");
let CreateOneMessagesResolver = class CreateOneMessagesResolver {
    async createOneMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Messages_1.Messages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneMessagesArgs_1.CreateOneMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneMessagesResolver.prototype, "createOneMessages", null);
CreateOneMessagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Messages_1.Messages)
], CreateOneMessagesResolver);
exports.CreateOneMessagesResolver = CreateOneMessagesResolver;
