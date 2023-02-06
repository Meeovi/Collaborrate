"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyEmailsArgs_1 = require("./args/FindManyEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const helpers_1 = require("../../../helpers");
let FindManyEmailsResolver = class FindManyEmailsResolver {
    async findManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Emails_1.Emails], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEmailsArgs_1.FindManyEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyEmailsResolver.prototype, "findManyEmails", null);
FindManyEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], FindManyEmailsResolver);
exports.FindManyEmailsResolver = FindManyEmailsResolver;
