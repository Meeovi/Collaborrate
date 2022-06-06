"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPollsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstPollsArgs_1 = require("./args/FindFirstPollsArgs");
const Polls_1 = require("../../../models/Polls");
const helpers_1 = require("../../../helpers");
let FindFirstPollsResolver = class FindFirstPollsResolver {
    async findFirstPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Polls_1.Polls, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPollsArgs_1.FindFirstPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPollsResolver.prototype, "findFirstPolls", null);
FindFirstPollsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Polls_1.Polls)
], FindFirstPollsResolver);
exports.FindFirstPollsResolver = FindFirstPollsResolver;
