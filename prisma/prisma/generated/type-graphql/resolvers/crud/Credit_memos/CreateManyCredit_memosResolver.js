"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCredit_memosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyCredit_memosArgs_1 = require("./args/CreateManyCredit_memosArgs");
const Credit_memos_1 = require("../../../models/Credit_memos");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCredit_memosResolver = class CreateManyCredit_memosResolver {
    async createManyCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCredit_memosArgs_1.CreateManyCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCredit_memosResolver.prototype, "createManyCredit_memos", null);
CreateManyCredit_memosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], CreateManyCredit_memosResolver);
exports.CreateManyCredit_memosResolver = CreateManyCredit_memosResolver;
